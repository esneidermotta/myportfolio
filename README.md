# myportfolio

[![Open in Bolt](https://bolt.new/static/open-in-bolt.svg)](https://bolt.new/~/sb1-iybob5sh)

## Contact Form

The contact form supports two send paths:

1. Supabase insert into the `contact_submissions` table.
2. Email fallback through `mailto:` to `esneidermotta.work@hotmail.com`.

Create `.env.local` from `.env.example` and set either:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

or:

```env
VITE_CONTACT_EMAIL=esneidermotta.work@hotmail.com
```

Restart `pnpm dev` after changing environment variables.
