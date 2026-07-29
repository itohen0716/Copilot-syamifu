# Copilot-syamifu

三味線の文化譜を書くための手入力エディタ（プロトタイプ）を収めたリポジトリです。

この初期コミットは Electron + React + Vite を使った最小雛形で、簡易なツールバーと SVG キャンバスによりクリックで記号を置けます。曲データは JSON としてエクスポート/インポートできます。

目次
- 目的
- 必要環境
- 開発手順（ローカル）
- 基本操作

目的
- まずは手入力エディタの最小実装を素早く確認できる状態にすること。

必要環境
- Node.js 18+ 推奨
- npm または pnpm

開発手順（ローカル）
1. 依存関係をインストール

   npm install

2. 開発用サーバーを起動（Vite）

   npm run dev

   - 別ターミナルで Electron を起動します：
     VITE_DEV_SERVER_URL=http://localhost:5173 npm start

   - 2 つのターミナルで、Vite と Electron を個別に起動してください。

3. ビルドと実行（配布用ビルドは任意の electron-packager/electron-builder を利用してください）

   npm run build

基本操作
- ツールバーからツール（Note, Rest, Ornament）を選択
- SVG キャンバスをクリックすると選択した記号が配置されます
- ファイルメニューのエクスポート/インポートで JSON の出力と読み込みができます

今後の予定
- 三味線固有の記号セット追加（弦指定、押さえ位置、装飾の細分化）
- 保存形式の拡張、ローカル DB（SQLite）対応
- モバイル（React Native）や OCR 機能の接続

