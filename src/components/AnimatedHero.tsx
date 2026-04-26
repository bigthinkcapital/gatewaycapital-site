/* eslint-disable @typescript-eslint/no-non-null-assertion */
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

    // Use local mutable refs so inner functions always have fresh values
    let W = canvas.offsetWidth || 800
    let H = canvas.offsetHeight || 600
    let animId = 0
    let frame = 0
    let spawnTimer = 0

    const particles: Particle[] = []
    const bars: Bar[] = []
    const streams: Stream[] = []

    const BLUES = [
      'rgba(27,79,216,',
      'rgba(59,130,246,',
      'rgba(37,99,235,',
      'rgba(96,165,250,',
    ]

    // ── INIT ──────────────────────────────
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
        const pts: { x: number; y: number }[] = []
        const startX = Math.random() * W
        for (let j = 0; j < 8; j++) {
          pts.push({ x: startX + (Math.random() - 0.5) * 80 * j, y: (j / 7) * H })
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

    function resize() {
      W = canvas.offsetWidth || 800
      H = canvas.offsetHeight || 600
      canvas.width = W
      canvas.height = H
      initBars()
      initStreams()
    }

    // ── PARTICLES ─────────────────────────
    function spawnParticle() {
      const types: Particle['type'][] = ['dollar', 'dollar', 'dollar', 'circle', 'bar', 'line']
      particles.push({
        x: Math.random() * W,
        y: H + 20,
        vx: (Math.random() - 0.5) * 0.8,
        vy: -(Math.random() * 1.2 + 0.4),
        size: Math.random() * 16 + 8,
        opacity: 0,
        type: types[Math.floor(Math.random() * types.length)],
        color: BLUES[Math.floor(Math.random() * BLUES.length)],
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.02,
        life: 0,
        maxLife: Math.random() * 300 + 200,
      })
    }

    // ── DRAW HELPERS ──────────────────────
    function drawDollar(x: number, y: number, size: number, rot: number, alpha: number, color: string) {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rot)
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

    function drawBarShape(x: number, y: number, size: number, alpha: number, color: string) {
      ctx.save()
      ctx.globalAlpha = alpha
      ctx.fillStyle = color + '0.7)'
      ctx.fillRect(x - size / 4, y - size / 2, size / 2, size)
      ctx.restore()
    }

    function drawLineShape(x: number, y: number, size: number, rot: number, alpha: number, color: string) {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rot)
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
        const grad = ctx.createLinearGradient(bar.x, H - bar.currentH, bar.x, H)
        grad.addColorStop(0, bar.color + '0.18)')
        grad.addColorStop(1, bar.color + '0.04)')
        ctx.fillStyle = grad
        ctx.fillRect(bar.x - bar.width / 2, H - bar.currentH, bar.width, bar.currentH)
        ctx.fillStyle = bar.color + '0.35)'
        ctx.fillRect(bar.x - bar.width / 2, H - bar.currentH, bar.width, 2)
      })
    }

    function drawGrid() {
      const spacing = 36
      for (let x = 0; x <= W; x += spacing) {
        for (let y = 0; y <= H; y += spacing) {
          ctx.beginPath()
          ctx.arc(x, y, 1, 0, Math.PI * 2)
          ctx.fillStyle = 'rgba(27,79,216,0.06)'
          ctx.fill()
        }
      }
    }

    function drawTrendArrow(t: number) {
      const cx = W * 0.85
      const cy = H * 0.4
      const pulse = Math.sin(t * 0.02) * 0.3 + 0.7
      ctx.save()
      ctx.globalAlpha = 0.12 * pulse
      ctx.strokeStyle = 'rgba(27,79,216,1)'
      ctx.lineWidth = 3
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'
      ctx.beginPath()
      ctx.moveTo(cx - 60, cy + 40)
      ctx.lineTo(cx - 30, cy + 15)
      ctx.lineTo(cx, cy - 10)
      ctx.lineTo(cx + 30, cy - 30)
      ctx.lineTo(cx + 60, cy - 55)
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(cx + 60, cy - 55)
      ctx.lineTo(cx + 45, cy - 48)
      ctx.moveTo(cx + 60, cy - 55)
      ctx.lineTo(cx + 55, cy - 40)
      ctx.stroke()
      ctx.restore()
    }

    function drawFlowLines(t: number) {
      const lines = [
        { x1: 0, y1: H * 0.25, x2: W * 0.3, y2: H * 0.15 },
        { x1: W * 0.7, y1: H * 0.1, x2: W, y2: H * 0.3 },
        { x1: W * 0.1, y1: H * 0.75, x2: W * 0.4, y2: H * 0.85 },
      ]
      lines.forEach((line, i) => {
        const prog = (t * 0.008 + i * 0.33) % 1
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
        ctx.globalAlpha = 0.5
        ctx.beginPath()
        ctx.arc(x, y, 3, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(37,99,235,1)'
        ctx.fill()
        ctx.restore()
      })
    }

    // ── MAIN LOOP ─────────────────────────
    function animate() {
      animId = requestAnimationFrame(animate)
      frame++
      ctx.clearRect(0, 0, W, H)

      // Background
      const bg = ctx.createLinearGradient(0, 0, W, H)
      bg.addColorStop(0, 'rgba(244,247,255,1)')
      bg.addColorStop(0.5, 'rgba(237,242,255,1)')
      bg.addColorStop(1, 'rgba(244,247,255,1)')
      ctx.fillStyle = bg
      ctx.fillRect(0, 0, W, H)

      drawGrid()
      drawRisingBars()
      drawFlowLines(frame)
      drawTrendArrow(frame)
      streams.forEach(s => drawStreamPath(s))

      // Spawn
      spawnTimer++
      if (spawnTimer > 12 && particles.length < 35) {
        spawnParticle()
        spawnTimer = 0
      }

      // Update particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        p.rotation += p.rotSpeed
        p.life++
        const lr = p.life / p.maxLife
        if (lr < 0.15)       p.opacity = (lr / 0.15) * 0.18
        else if (lr > 0.75)  p.opacity = (1 - (lr - 0.75) / 0.25) * 0.18
        else                 p.opacity = 0.18

        if (p.life >= p.maxLife || p.y < -30) { particles.splice(i, 1); continue }

        switch (p.type) {
          case 'dollar': drawDollar(p.x, p.y, p.size, p.rotation, p.opacity, p.color); break
          case 'circle': drawCircle(p.x, p.y, p.size, p.opacity, p.color); break
          case 'bar':    drawBarShape(p.x, p.y, p.size, p.opacity, p.color); break
          case 'line':   drawLineShape(p.x, p.y, p.size, p.rotation, p.opacity, p.color); break
        }
      }

      // Radial glows
      const g1 = ctx.createRadialGradient(W * 0.8, H * 0.1, 0, W * 0.8, H * 0.1, W * 0.4)
      g1.addColorStop(0, 'rgba(27,79,216,0.07)')
      g1.addColorStop(1, 'rgba(27,79,216,0)')
      ctx.fillStyle = g1
      ctx.fillRect(0, 0, W, H)

      const g2 = ctx.createRadialGradient(W * 0.1, H * 0.9, 0, W * 0.1, H * 0.9, W * 0.3)
      g2.addColorStop(0, 'rgba(59,130,246,0.05)')
      g2.addColorStop(1, 'rgba(59,130,246,0)')
      ctx.fillStyle = g2
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
