## Gemini API を使った PR レビュー Action の追加

### 概要
Pull Request の作成・更新時に、GitHub Actions 上で Gemini API を使った自動コードレビューを実行できるようにします。

### 実装要件
- **トリガー:** Pull Request の `opened` / `synchronize` / `reopened` で発火
- **レビュー対象:** ベースブランチとの差分（diff）
- **レビュー実行:** Gemini API を呼び出してコードレビューを生成
- **結果出力:** 生成されたレビューを PR にコメントとして投稿

### Secrets
- Gemini API Key は GitHub の Secrets で管理してください。
- Secret 名は `GEMINI_API_KEY` としてください。
- Secret の登録方法（GitHub 側での設定手順）も併せて教えてください。

### 追加対象ファイル
- `.github/workflows/gemini-review.yml`: 上記ワークフローの定義を追加。
