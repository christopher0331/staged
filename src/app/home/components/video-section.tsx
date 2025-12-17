export function VideoSection() {
  return (
    <div className="mt-12 bg-white/80 rounded-xl shadow-md p-6 border border-indigo-100">
      <div className="aspect-video w-full overflow-hidden rounded-lg">
        <iframe 
          className="w-full h-full"
          src="https://www.youtube.com/embed/NLMSF-intro-video" 
          title="National Leiomyosarcoma Foundation (NLMSF)"
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
