# Chirp feed (starter)

A small React feed built with Vite. It renders a list of posts read from
`public/posts.json`.

## What is already done

- `npm run build` produces a `dist/` folder of static HTML, CSS, and JavaScript.
- That `dist/` folder is everything a web host needs. There is no server to run.

## What ships with this starter

- `.github/workflows/deploy.yml` builds on every push to `main` and syncs `dist/` to S3.
- The bucket name in the sync step is a placeholder (`chirp-site-CHANGE-ME`). The guided lab has you replace it once your bucket exists.
- The first push fails on the **configure-aws-credentials** step until you create the IAM user and add repository secrets. The log often reports `Input required and not supplied: aws-region` because the secrets are not set yet. That failure is expected.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # writes dist/
```
