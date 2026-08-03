# Deploy do site Atende&Vende em VPS (Hostgator)

Aplicação: TanStack Start (React 19 + Vite) com SSR em Node.
O site é servido por um processo Node próprio; o Nginx fica na frente fazendo proxy e HTTPS.

## 1. Requisitos no servidor

```bash
node -v      # precisa ser 20 ou superior
npm -v
sudo npm i -g pm2
```

Nginx instalado e, para HTTPS, `certbot`.

## 2. Enviar o projeto

Envie o repositório (ou o zip do código) para, por exemplo, `/var/www/atende-vende`.
Não é necessário enviar `node_modules` nem `dist`.

## 3. Variáveis de ambiente

```bash
cp .env.example .env
nano .env
```

Preencha:

- `PORT` / `HOST` — porta interna do Node (padrão 3000 em 127.0.0.1).
- `N8N_WEBHOOK_URL` — webhook do fluxo n8n que responde o atendente virtual (`/api/chat`).
- `N8N_WEBHOOK_TOKEN` — opcional, enviado como `Authorization: Bearer`.

Sem `N8N_WEBHOOK_URL` o chat responde com a mensagem padrão "ainda não está conectado".

## 4. Build e start

```bash
bash deploy/deploy.sh
```

O script roda `npm ci`, gera o build com `NITRO_PRESET=node_server` e sobe/recarrega o PM2.

Manualmente seria:

```bash
npm ci
NITRO_PRESET=node_server npm run build
pm2 start ecosystem.config.cjs && pm2 save
pm2 startup     # habilita o start automático no boot
```

Saída do build:

- `dist/server/index.mjs` — servidor Node (SSR + rota `/api/chat`)
- `dist/client/` — assets estáticos, imagens e vídeos (servidos pelo próprio Node)

## 5. Nginx + HTTPS

```bash
sudo cp deploy/nginx-atende-vende.conf /etc/nginx/sites-available/atende-vende
sudo ln -s /etc/nginx/sites-available/atende-vende /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
sudo certbot --nginx -d atendeevende.com.br -d www.atendeevende.com.br
```

Ajuste `server_name` no arquivo para o domínio real.

## 6. Atualizações futuras

```bash
cd /var/www/atende-vende
git pull        # ou envie os arquivos novamente
bash deploy/deploy.sh
```

## 7. Verificações

```bash
pm2 logs atende-vende          # logs da aplicação
curl -I http://127.0.0.1:3000  # deve responder 200
```

Checklist visual após publicar: hero, vídeos das demonstrações, imagens dos segmentos,
prints da agenda e do painel, e o chat abrindo pelo botão flutuante.

## Observações

- Todas as imagens e vídeos estão em `public/images` e `public/videos`, sem dependência
  de CDN externa — por isso funcionam no servidor próprio.
- Se a Hostgator bloquear a porta 3000 externamente, tudo bem: o acesso é feito só pelo
  Nginx (127.0.0.1), que responde nas portas 80/443.
