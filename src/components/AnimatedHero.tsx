'use client'
import { useEffect, useRef } from 'react'

interface Particle {
  x: number; y: number; vx: number; vy: number
  size: number; opacity: number; type: 'dollar' | 'circle' | 'bar' | 'line'
  color: string; rotation: number; rotSpeed: number; life: number; maxLife: number
}

interface Bar {
  x: number; targetH: number; currentH: number; width: number; color: string; speed: number
}

interface Stream {
  points: { x: number; y: number }[]
  opacity: number; speed: number; color: string; width: number
}

export default function AnimatedHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let W = 0, H = 0

    const particles: Particle[] = []
    const bars: Bar[] = []
    const streams: Stream[] = []

    const BLUES = ['rgba(27,79,216,', 'rgba(59,130,246,', 'rgba(37,99,235,', 'rgba(96,165,250,']
    const NAVY = 'rgba(15,31,74,'

    function resize() {
      W = canvas.offsetWidth
      H = canvas.offsetHeight
      canvas.width = W
      canvas.height = H
      initBars()
      initStreams()
    }

    function initBars() {
      bars.length = 0
      const count = Math.floor(W / 60)
      for (let i = 0; i < count; i++) {
        bars.push({
          x: (i / count) * W + 20,
          targetH: Math.random() * H * 0.45 + H * 0.05,
          currentH: 0,
          width: Math.random() * 18 + 8,
          color: BLUES[Math.floor(Math.random() * BLUES.length)],
          speed: Math.random() * 0.04 + 0.02,
        })
      }
    }

    function initStreams() {
      streams.length = 0
      for (let i = 0; i < 5; i++) {
        const pts = []
        const startX = Math.random() * W
        for (let j = 0; j < 8; j++) {
          pts.push({
            x: startX + (Math.random() - 0.5) * 80 * j,
            y: (j / 7) * H,
          })
        }
        streams.push({
          points: pts,
          opacity: Math.random() * 0.08 + 0.03,
          speed: Math.random() * 0.3 + 0.1,
          color: BLUES[Math.floor(Math.random() * BLUES.length)],
          width: Math.random() * 2 + 1,
        })
      }
    }

    function spawnParticle() {
      const types: Particle['type'][] = ['dollar', 'dollar', 'dollar', 'circle', 'bar', 'line']
      const t = types[Math.floor(Math.random() * types.length)]
      particles.push({
        x: Math.random() * W,
        y: H + 20,
        vx: (Math.random() - 0.5) * 0.8,
        vy: -(Math.random() * 1.2 + 0.4),
        size: Math.random() * 16 + 8,
        opacity: 0,
        type: t,
        color: BLUES[Math.floor(Math.random() * BLUES.length)],
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.02,
        life: 0,
        maxLife: Math.random() * 300 + 200,
      })
    }

    function drawDollar(x: number, y: number, size: number, rotation: number, alpha: number, color: string) {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)
      ctx.globalAlpha = alpha
      ctx.font = `bold ${size}px Arial`
      ctx.fillStyle = color + '1)'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText('$', 0, 0)
      ctx.restore()
    }

    function drawCircle(x: number, y: number, size: number, alpha: number, color: string) {
      ctx.save()
      ctx.globalAlpha = alpha
      ctx.beginPath()
      ctx.arc(x, y, size / 2, 0, Math.PI * 2)
      ctx.strokeStyle = color + '0.8)'
      ctx.lineWidth = 1.5
      ctx.stroke()
      ctx.restore()
    }

    function drawBar(x: number, y: number, size: number, alpha: number, color: string) {
      ctx.save()
      ctx.globalAlpha = alpha
      ctx.fillStyle = color + '0.7)'
      ctx.fillRect(x - size / 4, y - size / 2, size / 2, size)
      ctx.restore()
    }

    function drawLine(x: number, y: number, size: number, rotation: number, alpha: number, color: string) {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)
      ctx.globalAlpha = alpha
      ctx.strokeStyle = color + '0.6)'
      ctx.lineWidth = 1.5
      ctx.beginPath()
      ctx.moveTo(-size / 2, 0)
      ctx.lineTo(size / 2, 0)
      ctx.stroke()
      ctx.restore()
    }

    function drawStreamPath(stream: Stream) {
      if (stream.points.length < 2) return
      ctx.save()
      ctx.globalAlpha = stream.opacity
      ctx.strokeStyle = stream.color + '1)'
      ctx.lineWidth = stream.width
      ctx.beginPath()
      ctx.moveTo(stream.points[0].x, stream.points[0].y)
      for (let i = 1; i < stream.points.length - 1; i++) {
        const mx = (stream.points[i].x + stream.points[i + 1].x) / 2
        const my = (stream.points[i].y + stream.points[i + 1].y) / 2
        ctx.quadraticCurveTo(stream.points[i].x, stream.points[i].y, mx, my)
      }
      ctx.stroke()
      ctx.restore()
    }

    function drawRisingBars() {
      bars.forEach(bar => {
        bar.currentH += (bar.targetH - bar.currentH) * bar.speed
        const x = bar.x
        const y = H
        const h = bar.currentH
        const w = bar.width

        // Gradient bar
        const grad = ctx.createLinearGradient(x, y - h, x, y)
        grad.addColorStop(0, bar.color + '0.18)')
        grad.addColorStop(1, bar.color + '0.04)')
        ctx.fillStyle = grad
        ctx.fillRect(x - w / 2, y - h, w, h)

        // Top cap glow
        ctx.fillStyle = bar.color + '0.35)'
        ctx.fillRect(x - w / 2, y - h, w, 2)
      })
    }

    function drawGrid() {
      // Subtle dot grid
      ctx.save()
      const spacing = 36
      for (let x = 0; x < W; x += spacing) {
        for (let y = 0; y < H; y += spacing) {
          ctx.beginPath()
          ctx.arc(x, y, 1, 0, Math.PI * 2)
          ctx.fillStyle = 'rgba(27,79,216,0.06)'
          ctx.fill()
        }
      }
      ctx.restore()
    }

    function drawUpwardArrow(t: number) {
      // Pulsing upward arrow — represents growth
      const cx = W * 0.85
      const cy = H * 0.4
      const pulse = Math.sin(t * 0.02) * 0.3 + 0.7

      ctx.save()
      ctx.globalAlpha = 0.12 * pulse
      ctx.strokeStyle = 'rgba(27,79,216,1)'
      ctx.lineWidth = 3
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'

      // Draw a trending line upward
      ctx.beginPath()
      ctx.moveTo(cx - 60, cy + 40)
      ctx.lineTo(cx - 30, cy + 15)
      ctx.lineTo(cx, cy - 10)
      ctx.lineTo(cx + 30, cy - 30)
      ctx.lineTo(cx + 60, cy - 55)
      ctx.stroke()

      // Arrow head
      ctx.beginPath()
      ctx.moveTo(cx + 60, cy - 55)
      ctx.lineTo(cx + 45, cy - 48)
      ctx.moveTo(cx + 60, cy - 55)
      ctx.lineTo(cx + 55, cy - 40)
      ctx.stroke()
      ctx.restore()
    }

    function drawCircuitLines(t: number) {
      // Moving circuit/flow lines suggesting money flow
      const lines = [
        { x1: 0, y1: H * 0.25, x2: W * 0.3, y2: H * 0.15 },
        { x1: W * 0.7, y1: H * 0.1, x2: W, y2: H * 0.3 },
        { x1: W * 0.1, y1: H * 0.75, x2: W * 0.4, y2: H * 0.85 },
      ]
      lines.forEach((line, i) => {
        const prog = ((t * 0.008 + i * 0.33) % 1)
        const x = line.x1 + (line.x2 - line.x1) * prog
        const y = line.y1 + (line.y2 - line.y1) * prog

        ctx.save()
        ctx.globalAlpha = 0.15
        ctx.strokeStyle = 'rgba(27,79,216,1)'
        ctx.lineWidth = 1
        ctx.setLineDash([4, 8])
        ctx.beginPath()
        ctx.moveTo(line.x1, line.y1)
        ctx.lineTo(line.x2, line.y2)
        ctx.stroke()
        ctx.setLineDash([])

        // Moving dot
        ctx.globalAlpha = 0.5
        ctx.beginPath()
        ctx.arc(x, y, 3, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(37,99,235,1)'
        ctx.fill()
        ctx.restore()
      })
    }

    let frame = 0
    let spawnTimer = 0

    function animate() {
      animId = requestAnimationFrame(animate)
      frame++

      // Clear
      ctx.clearRect(0, 0, W, H)

      // Background gradient
      const bg = ctx.createLinearGradient(0, 0, W, H)
      bg.addColorStop(0, 'rgba(244,247,255,1)')
      bg.addColorStop(0.5, 'rgba(237,242,255,1)')
      bg.addColorStop(1, 'rgba(244,247,255,1)')
      ctx.fillStyle = bg
      ctx.fillRect(0, 0, W, H)

      // Layers (back to front)
      drawGrid()
      drawRisingBars()
      drawCircuitLines(frame)
      drawUpwardArrow(frame)

      // Streams
      streams.forEach(s => drawStreamPath(s))

      // Spawn particles
      spawnTimer++
      if (spawnTimer > 12 && particles.length < 35) {
        spawnParticle()
        spawnTimer = 0
      }

      // Update & draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        p.rotation += p.rotSpeed
        p.life++

        // Fade in/out
        const lifeRatio = p.life / p.maxLife
        if (lifeRatio < 0.15) p.opacity = lifeRatio / 0.15
        else if (lifeRatio > 0.75) p.opacity = 1 - (lifeRatio - 0.75) / 0.25
        else p.opacity = 1

        p.opacity *= 0.18 // keep subtle

        if (p.life >= p.maxLife || p.y < -30) {
          particles.splice(i, 1)
          continue
        }

        switch (p.type) {
          case 'dollar': drawDollar(p.x, p.y, p.size, p.rotation, p.opacity, p.color); break
          case 'circle': drawCircle(p.x, p.y, p.size, p.opacity, p.color); break
          case 'bar':    drawBar(p.x, p.y, p.size, p.opacity, p.color); break
          case 'line':   drawLine(p.x, p.y, p.size, p.rotation, p.opacity, p.color); break
        }
      }

      // Subtle radial glow — top right
      const glow = ctx.createRadialGradient(W * 0.8, H * 0.1, 0, W * 0.8, H * 0.1, W * 0.4)
      glow.addColorStop(0, 'rgba(27,79,216,0.07)')
      glow.addColorStop(1, 'rgba(27,79,216,0)')
      ctx.fillStyle = glow
      ctx.fillRect(0, 0, W, H)

      // Bottom left glow
      const glow2 = ctx.createRadialGradient(W * 0.1, H * 0.9, 0, W * 0.1, H * 0.9, W * 0.3)
      glow2.addColorStop(0, 'rgba(59,130,246,0.05)')
      glow2.addColorStop(1, 'rgba(59,130,246,0)')
      ctx.fillStyle = glow2
      ctx.fillRect(0, 0, W, H)
    }

    const ro = new ResizeObserver(() => resize())
    ro.observe(canvas)
    resize()
    animate()

    return () => {
      cancelAnimationFrame(animId)
      ro.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: 'block' }}
      aria-hidden="true"
    />
  )
}
