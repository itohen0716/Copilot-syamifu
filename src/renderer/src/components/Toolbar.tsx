import React from 'react'
import { Tool } from '../App'

export default function Toolbar({ tool, setTool }: { tool: Tool; setTool: (t: Tool) => void }) {
  return (
    <div className="toolbar">
      <button className={tool === 'note' ? 'active' : ''} onClick={() => setTool('note')}>
        Note
      </button>
      <button className={tool === 'rest' ? 'active' : ''} onClick={() => setTool('rest')}>
        Rest
      </button>
      <button className={tool === 'ornament' ? 'active' : ''} onClick={() => setTool('ornament')}>
        Ornament
      </button>
      <button
        onClick={() => {
          const data = (window as any).editorData || { notes: [] }
          const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
          const url = URL.createObjectURL(blob)
          const a = document.createElement('a')
          a.href = url
          a.download = 'score.json'
          a.click()
          URL.revokeObjectURL(url)
        }}
      >
        Export JSON
      </button>
      <label className="import-label">
        Import JSON
        <input
          type="file"
          accept="application/json"
          onChange={e => {
            const f = e.target.files?.[0]
            if (!f) return
            const reader = new FileReader()
            reader.onload = ev => {
              try {
                const obj = JSON.parse(String(ev.target?.result))
                ;(window as any).editorData = obj
                alert('Imported')
                window.location.reload()
              } catch (err) {
                alert('Invalid JSON')
              }
            }
            reader.readAsText(f)
          }}
        />
      </label>
    </div>
  )
}
