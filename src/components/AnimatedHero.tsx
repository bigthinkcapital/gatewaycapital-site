'use client'
import { useEffect, useRef } from 'react'

export default function AnimatedHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Capture both as non-null in local consts for closures
    const c = canvas
    const x = ctx

    let animId: number
    let W = c.offsetWidth || 800
    let H = c.offsetHeight || 600

    type PType = 'dollar' | 'circle' | 'bar' | 'line'
    interface Particle {
      px: number; py: number; vx: number; vy: number
      size: number; opacity: number; type: PType
      color: string; rotation: number; rotSpeed: number
      life: number; maxLife: number
    }
    interface Bar { bx: number; targetH: number; currentH: number; width: number; color: string; speed: number }
    interface Stream { points: { sx: number; sy: number }[]; opacity: number; color: string; width: number }

    const particles: Particle[] = []
    const bars: Bar[] = []
    const streams: Stream[] = []
    const BLUES = ['rgba(27,79,216,', 'rgba(59,130,246,', 'rgba(37,99,235,', 'rgba(96,165,250,']

    function initBars() {
      bars.length = 0
      const count = Math.floor(W / 60)
      for (let i = 0; i < count; i++) {
        bars.push({
          bx: (i / count) * W + 20,
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
          pts.push({ sx: startX + (Math.random() - 0.5) * 80 * j, sy: (j / 7) * H })
        }
        streams.push({
          points: pts,
          opacity: Math.random() * 0.08 + 0.03,
          color: BLUES[Math.floor(Math.random() * BLUES.length)],
          width: Math.random() * 2 + 1,
        })
      }
    }

    function resize() {
      W = c.offsetWidth || 800
      H = c.offsetHeight || 600
      c.width = W
      c.height = H
      initBars()
      initStreams()
    }

    function spawnParticle() {
      const types: PType[] = ['dollar', 'dollar', 'dollar', 'circle', 'bar', 'line']
      particles.push({
        px: Math.random() * W,
        py: H + 20,
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

    function drawDollar(dx: number, dy: number, size: number, rot: number, alpha: number, color: string) {
      x.save()
      x.translate(dx, dy)
      x.rotate(rot)
      x.globalAlpha = alpha
      x.font = `bold ${size}px Arial`
      x.fillStyle = color + '1)'
      x.textAlign = 'center'
      x.textBaseline = 'middle'
      x.fillText('$', 0, 0)
      x.restore()
    }

    function drawCircle(cx2: number, cy2: number, size: number, alpha: number, color: string) {
      x.save()
      x.globalAlpha = alpha
      x.beginPath()
      x.arc(cx2, cy2, size / 2, 0, Math.PI * 2)
      x.strokeStyle = color + '0.8)'
      x.lineWidth = 1.5
      x.stroke()
      x.restore()
    }

    function drawBarP(bx2: number, by2: number, size: number, alpha: number, color: string) {
      x.save()
      x.globalAlpha = alpha
      x.fillStyle = color + '0.7)'
      x.fillRect(bx2 - size / 4, by2 - size / 2, size / 2, size)
      x.restore()
    }

    function drawLine(lx: number, ly: number, size: number, rot: number, alpha: number, color: string) {
      x.save()
      x.translate(lx, ly)
      x.rotate(rot)
      x.globalAlpha = alpha
      x.strokeStyle = color + '0.6)'
      x.lineWidth = 1.5
      x.beginPath()
      x.moveTo(-size / 2, 0)
      x.lineTo(size / 2, 0)
      x.stroke()
      x.restore()
    }

    function drawRisingBars() {
      bars.forEach(bar => {
        bar.currentH += (bar.targetH - bar.currentH) * bar.speed
        const grad = x.createLinearGradient(bar.bx, H - bar.currentH, bar.bx, H)
        grad.addColorStop(0, bar.color + '0.18)')
        grad.addColorStop(1, bar.color + '0.04)')
        x.fillStyle = grad
        x.fillRect(bar.bx - bar.width / 2, H - bar.currentH, bar.width, bar.currentH)
        x.fillStyle = bar.color + '0.35)'
        x.fillRect(bar.bx - bar.width / 2, H - bar.currentH, bar.width, 2)
      })
    }

    function drawGrid() {
      const spacing = 36
      for (let gx = 0; gx < W; gx += spacing) {
        for (let gy = 0; gy < H; gy += spacing) {
          x.beginPath()
          x.arc(gx, gy, 1, 0, Math.PI * 2)
          x.fillStyle = 'rgba(27,79,216,0.06)'
          x.fill()
        }
      }
    }

    function drawUpwardArrow(t: number) {
      const ax = W * 0.85
      const ay = H * 0.4
      const pulse = Math.sin(t * 0.02) * 0.3 + 0.7
      x.save()
      x.globalAlpha = 0.12 * pulse
      x.strokeStyle = 'rgba(27,79,216,1)'
      x.lineWidth = 3
      x.lineCap = 'round'
      x.lineJoin = 'round'
      x.beginPath()
      x.moveTo(ax - 60, ay + 40)
      x.lineTo(ax - 30, ay + 15)
      x.lineTo(ax, ay - 10)
      x.lineTo(ax + 30, ay - 30)
      x.lineTo(ax + 60, ay - 55)
      x.stroke()
      x.beginPath()
      x.moveTo(ax + 60, ay - 55)
      x.lineTo(ax + 45, ay - 48)
      x.moveTo(ax + 60, ay - 55)
      x.lineTo(ax + 55, ay - 40)
      x.stroke()
      x.restore()
    }

    function drawCircuitLines(t: number) {
      const lines = [
        { x1: 0, y1: H * 0.25, x2: W * 0.3, y2: H * 0.15 },
        { x1: W * 0.7, y1: H * 0.1, x2: W, y2: H * 0.3 },
        { x1: W * 0.1, y1: H * 0.75, x2: W * 0.4, y2: H * 0.85 },
      ]
      lines.forEach((line, i) => {
        const prog = (t * 0.008 + i * 0.33) % 1
        const lx = line.x1 + (line.x2 - line.x1) * prog
        const ly = line.y1 + (line.y2 - line.y1) * prog
        x.save()
        x.globalAlpha = 0.15
        x.strokeStyle = 'rgba(27,79,216,1)'
        x.lineWidth = 1
        x.setLineDash([4, 8])
        x.beginPath()
        x.moveTo(line.x1, line.y1)
        x.lineTo(line.x2, line.y2)
        x.stroke()
        x.setLineDash([])
        x.globalAlpha = 0.5
        x.beginPath()
        x.arc(lx, ly, 3, 0, Math.PI * 2)
        x.fillStyle = 'rgba(37,99,235,1)'
        x.fill()
        x.restore()
      })
    }

    function drawStreams() {
      streams.forEach(s => {
        if (s.points.length < 2) return
        x.save()
        x.globalAlpha = s.opacity
        x.strokeStyle = s.color + '1)'
        x.lineWidth = s.width
        x.beginPath()
        x.moveTo(s.points[0].sx, s.points[0].sy)
        for (let i = 1; i < s.points.length - 1; i++) {
          const mx = (s.points[i].sx + s.points[i + 1].sx) / 2
          const my = (s.points[i].sy + s.points[i + 1].sy) / 2
          x.quadraticCurveTo(s.points[i].sx, s.points[i].sy, mx, my)
        }
        x.stroke()
        x.restore()
      })
    }

    let frame = 0
    let spawnTimer = 0

    function animate() {
      animId = requestAnimationFrame(animate)
      frame++
      x.clearRect(0, 0, W, H)

      const bg = x.createLinearGradient(0, 0, W, H)
      bg.addColorStop(0, 'rgba(244,247,255,1)')
      bg.addColorStop(0.5, 'rgba(237,242,255,1)')
      bg.addColorStop(1, 'rgba(244,247,255,1)')
      x.fillStyle = bg
      x.fillRect(0, 0, W, H)

      drawGrid()
      drawRisingBars()
      drawCircuitLines(frame)
      drawUpwardArrow(frame)
      drawStreams()

      spawnTimer++
      if (spawnTimer > 12 && particles.length < 35) { spawnParticle(); spawnTimer = 0 }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.px += p.vx; p.py += p.vy; p.rotation += p.rotSpeed; p.life++
        const lr = p.life / p.maxLife
        if (lr < 0.15) p.opacity = (lr / 0.15) * 0.18
        else if (lr > 0.75) p.opacity = (1 - (lr - 0.75) / 0.25) * 0.18
        else p.opacity = 0.18
        if (p.life >= p.maxLife || p.py < -30) { particles.splice(i, 1); continue }
        if (p.type === 'dollar') drawDollar(p.px, p.py, p.size, p.rotation, p.opacity, p.color)
        else if (p.type === 'circle') drawCircle(p.px, p.py, p.size, p.opacity, p.color)
        else if (p.type === 'bar') drawBarP(p.px, p.py, p.size, p.opacity, p.color)
        else drawLine(p.px, p.py, p.size, p.rotation, p.opacity, p.color)
      }

      const g1 = x.createRadialGradient(W * 0.8, H * 0.1, 0, W * 0.8, H * 0.1, W * 0.4)
      g1.addColorStop(0, 'rgba(27,79,216,0.07)'); g1.addColorStop(1, 'rgba(27,79,216,0)')
      x.fillStyle = g1; x.fillRect(0, 0, W, H)

      const g2 = x.createRadialGradient(W * 0.1, H * 0.9, 0, W * 0.1, H * 0.9, W * 0.3)
      g2.addColorStop(0, 'rgba(59,130,246,0.05)'); g2.addColorStop(1, 'rgba(59,130,246,0)')
      x.fillStyle = g2; x.fillRect(0, 0, W, H)
    }

    const ro = new ResizeObserver(() => resize())
    ro.observe(c)
    resize()
    animate()

    return () => { cancelAnimationFrame(animId); ro.disconnect() }
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
