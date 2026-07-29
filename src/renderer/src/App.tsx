import React, { useState } from 'react'
import Toolbar from './components/Toolbar'
import Canvas from './components/Canvas'

export type Tool = 'note' | 'rest' | 'ornament'

export default function App() {
  const [tool, setTool] = useState<Tool>('note')

  return (
    <div className="app">
      <header className="app-header">
        <h1>Copilot-syamifu — 手入力エディタ（プロトタイプ）</h1>
      </header>
      <Toolbar tool={tool} setTool={setTool} />
      <main>
        <Canvas tool={tool} />
      </main>
    </div>
  )
}
