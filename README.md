# FashionForge

An AI-powered fashion design platform built with Next.js 16, featuring sketch-to-design generation, style variations, and virtual try-on using cutting-edge AI models.

## 🎨 Features

- **Design Upload**: Upload fashion sketches with drag & drop support
- **AI Design Generation**: Transform sketches into professional fashion designs using FLUX Pro
- **Style Variations**: Generate multiple design variations (Modern, Retro, Minimalist, Bold, Elegant)
- **Color Palette System**: Choose from preset palettes or create custom color schemes
- **Design Categories**: Streetwear, High Fashion, Casual, Sportswear, Vintage
- **Virtual Try-On**: Visualize designs on model mockups
- **Design Library**: Organize and manage all your designs
- **HD Export**: Download designs in high resolution
- **Admin Dashboard**: Platform analytics and user management

## 🚀 Tech Stack

- **Framework**: Next.js 16.0.1 with App Router & Turbopack
- **Language**: TypeScript
- **Database**: PostgreSQL (Neon) with Prisma ORM
- **Storage**: Vercel Blob for design files
- **AI Services**:
  - Replicate FLUX Pro (fashion design generation)
  - Stable Diffusion XL (design variations)
- **UI**: Brutalist design system with custom components
- **Styling**: Tailwind CSS 4.0
- **Icons**: React Icons (Remix Icon)

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database (Neon recommended)
- Replicate API token
- Vercel account (for Blob storage)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/fashionforge.git
cd fashionforge
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` and add your API keys and database URL:
```env
DATABASE_URL="postgresql://neondb_owner:password@host.neon.tech/neondb?sslmode=require"
NEXT_PUBLIC_APP_URL="http://localhost:3000"
BLOB_READ_WRITE_TOKEN="vercel_blob_..."
REPLICATE_API_TOKEN="r8_..."
NEXTAUTH_SECRET="your-secret-here"
```

4. Set up the database:
```bash
npx prisma generate
npx prisma db push
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## 🔐 Environment Variables

### Required Variables

- `DATABASE_URL` - PostgreSQL connection string (Neon)
- `NEXT_PUBLIC_APP_URL` - Your application URL
- `BLOB_READ_WRITE_TOKEN` - Vercel Blob storage token
- `REPLICATE_API_TOKEN` - Replicate API token for AI generation
- `NEXTAUTH_SECRET` - Secret for NextAuth sessions

### Optional Variables

- `STRIPE_SECRET_KEY` - For payment processing
- `NEXTAUTH_URL` - Full URL for NextAuth callbacks

## 📁 Project Structure

```
fashionforge/
├── app/
│   ├── api/              # API routes
│   │   ├── designs/      # Design management & generation
│   │   ├── variations/   # Design variation endpoints
│   │   └── projects/     # Project management
│   ├── dashboard/        # Dashboard pages
│   │   ├── designs/      # Design library
│   │   ├── variations/   # Variation browser
│   │   └── create/       # Design creation workflow
│   └── page.tsx          # Landing page
├── components/
│   └── ui/               # Shadcn UI components
├── lib/
│   └── prisma.ts         # Prisma client
└── prisma/
    └── schema.prisma     # Database schema
```

## API Routes

### Audios
- `GET /api/audios` - List audios with pagination
- `POST /api/audios/upload` - Upload audio file
- `GET /api/audios/[id]` - Get audio details
- `PATCH /api/audios/[id]` - Update audio metadata
- `DELETE /api/audios/[id]` - Delete audio

### Voices
- `GET /api/voices` - List voices with pagination

### Projects
- `GET /api/projects` - List projects with pagination
- `POST /api/projects` - Create new project
- `GET /api/projects/[id]` - Get project details
- `PATCH /api/projects/[id]` - Update project
- `DELETE /api/projects/[id]` - Delete project
- `POST /api/projects/[id]/estimate` - Get AI estimation
- `POST /api/projects/[id]/assign` - Assign expert
- `POST /api/projects/[id]/audios` - Add audios to project

## Development

### Database Migrations

After changing the Prisma schema:
```bash
npx prisma generate
npx prisma db push
```

### Build

```bash
npm run build
```

### Type Checking

```bash
npx tsc --noEmit
```

## Deploy on Vercel

1. Push your code to GitHub
2. Import the project to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

The database should be set up with Vercel Postgres or Neon.

## License

MIT
