import React, { useEffect, useRef, useState } from 'react'
import { Tool } from '../App'

type NoteItem = { id: string; x: number; y: number; type: Tool; label?: string }

export default function Canvas({ tool }: { tool: Tool }) {
  const [items, setItems] = useState<NoteItem[]>(() => (window as any).editorData?.notes ?? [])
  const svgRef = useRef<SVGSVGElement | null>(null)

  useEffect(() => {
    ;(window as any).editorData = { notes: items }
  }, [items])

  function handleClick(e: React.MouseEvent) {
    const svg = svgRef.current
    if (!svg) return
    const pt = svg.createSVGPoint()
    pt.x = e.clientX
    pt.y = e.clientY
    const loc = pt.matrixTransform(svg.getScreenCTM()!.inverse())
    const id = Math.random().toString(36).slice(2, 9)
    const newItem: NoteItem = { id, x: loc.x, y: loc.y, type: tool, label: tool === 'note' ? '〇' : tool === 'rest' ? '–' : '~' }
    setItems(prev => [...prev, newItem])
  }

  function removeItem(id: string) {
    setItems(prev => prev.filter(i => i.id !== id))
  }

  return (
    <div className="canvas-wrap">
      <svg ref={svgRef} className="canvas" onClick={handleClick} width="100%" height="600">
        <defs>
          <style>{`.note{font: 24px sans-serif; fill:#111}`}</style>
        </defs>
        <rect x={0} y={0} width="100%" height="100%" fill="#fafafa" />
        {items.map(item => (
          <g key={item.id} transform={`translate(${item.x}, ${item.y})`}>
            <text className="note" x={0} y={0} textAnchor="middle" dominantBaseline="middle">
              {item.label}
            </text>
            <rect x={-12} y={-12} width={24} height={24} fill="transparent" onDoubleClick={() => removeItem(item.id)} />
          </g>
        ))}
      </svg>
      <div className="canvas-help">Click to place a symbol. Double-click a symbol to delete.</div>
    </div>
  )
}
