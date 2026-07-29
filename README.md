# Copilot-syamifu

(Updated) 手入力エディタのプロジェクト雛形を追加しました。

使い方（ローカル）

1. 依存関係をインストール
   npm install

2. 開発サーバーを起動（Vite）
   npm run dev

3. 別ターミナルで Electron を起動（開発時）
   VITE_DEV_SERVER_URL=http://localhost:5173 npm run start

   - macOS / Linux の場合ターミナルで上記のように環境変数を指定して実行してください。
   - Windows の場合は PowerShell で: $env:VITE_DEV_SERVER_URL = "http://localhost:5173"; npm run start

エディタの基本操作
- ツールバーで Note / Rest / Ornament を選択して、SVG キャンバス上をクリックすると記号が配置されます。
- 記号をダブルクリックすると削除できます。
- Export JSON で現在の譜面データを JSON ファイルとして保存できます。Import JSON で読み込み可能です。

今後の作業候補
- 三味線特有記号（弦番号、押さえ位置、摺り、撥の種類）を追加
- 選択・移動・編集 UI の強化
- 保存をローカル DB（SQLite）に変更

