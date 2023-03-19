import Image from 'next/image';

export default function AboutMe() {
  return (
    <>
      <h2>Made 3D art for Munch.so</h2>

      <h1>Video Editing</h1>
      <br />

      <div className="grid grid-cols-2 h-full gap-24">
        <iframe
          width="395"
          height="703"
          src="https://www.youtube.com/embed/Bzp2FG0pnBQ"
          title="🦷 I made a fun dentist commercial 🦷"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <iframe
          width="260"
          height="515"
          src="https://www.youtube.com/embed/gA_wIEWQCCI"
          title="✂️  I made a Wahl commercial ✂️"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
      <br />
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/wFoVHUklMl4"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>

      <h2>Drawings</h2>

      <Image src="/bull.png" width={250} height={300} />
    </>
  );
}
