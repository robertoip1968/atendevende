#!/usr/bin/env bash
# Deploy do site Atende&Vende em VPS (Ubuntu/CentOS com Node 20+).
# Uso: bash deploy/deploy.sh
set -euo pipefail

cd "$(dirname "$0")/.."

echo "==> Instalando dependências"
npm ci || npm install

echo "==> Gerando build de produção (preset Node)"
NITRO_PRESET=node_server npm run build

echo "==> Reiniciando aplicação com PM2"
if pm2 describe atende-vende > /dev/null 2>&1; then
  pm2 reload ecosystem.config.cjs --update-env
else
  pm2 start ecosystem.config.cjs
fi
pm2 save

echo "==> Deploy concluído. Site rodando em http://127.0.0.1:3000"
