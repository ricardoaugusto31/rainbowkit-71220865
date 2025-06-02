import Head from "next/head";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tugas Rainbowkit</title>
        <meta name="description" content="Tugas Rainbowkit" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Background GIF */}
      <div className="bg-gif-wrapper">
        <img src="/background.gif" alt="background" className="bg-gif" />
        <div className="bg-overlay"></div>
      </div>
      <main className="custom-main">
        <h1 className="custom-title">Tugas Rainbowkit</h1>
        <ConnectButton />
      </main>
      <footer className="custom-footer">
        Ricardo Yan Augusto - 71220865
      </footer>
      <style jsx global>{`
        body {
          min-height: 100vh;
          margin: 0;
          padding: 0;
          font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
          color: #fff;
          overflow-x: hidden;
        }
      `}</style>
      <style jsx>{`
        .bg-gif-wrapper {
          position: fixed;
          top: 0; left: 0; width: 100vw; height: 100vh;
          z-index: 0;
          overflow: hidden;
        }
        .bg-gif {
          width: 100vw;
          height: 100vh;
          object-fit: cover;
          position: absolute;
          top: 0; left: 0;
        }
        .bg-overlay {
          position: absolute;
          top: 0; left: 0; width: 100vw; height: 100vh;
          background: linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(35,37,38,0.85) 100%);
          z-index: 1;
        }
        .custom-main {
          min-height: 90vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 2;
        }
        .custom-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 2rem;
          letter-spacing: 2px;
        }
        .custom-footer {
          width: 100%;
          text-align: center;
          padding: 1.5rem 0;
          font-size: 1.1rem;
          background: rgba(0,0,0,0.7);
          border-top: 1px solid #222;
          position: fixed;
          left: 0;
          bottom: 0;
          z-index: 2;
        }
      `}</style>
    </>
  );
}
