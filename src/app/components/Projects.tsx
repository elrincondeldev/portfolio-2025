function Projects() {
  return (
    <section className="container mx-auto px-4 py-10 md:py-20">
      <h1 className="acorn text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] font-bold text-center mb-8 md:mb-16 text-[#0083C4]">
        Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <ProjectCard
          title="Backgrounds Hub"
          description="Collection of modern, high quality backgrounds"
          image="/assets/background_hub.png"
          className="h-[300px] sm:h-[350px]"
          href="https://backgroundshub.vercel.app/"
        />
        <ComingSoonCard className="h-[300px] sm:h-[350px] hidden md:flex" />
        <ComingSoonCard className="h-[300px] sm:h-[350px] hidden md:flex" />
        <ProjectCard
          title="Skeleton Loader"
          description="Skeleton loader for loading states"
          image="/assets/skeleton_loader.png"
          className="h-[300px] sm:h-[350px] md:h-full md:col-span-1 lg:col-span-1"
          href="https://skeleton-loader-generator.vercel.app/"
        />

        <div className="flex-col gap-4 md:gap-6 md:col-span-1 lg:col-span-1 hidden md:flex">
          <ComingSoonCard className="h-[300px] sm:h-[350px]" />
          <ComingSoonCard className="h-[180px] sm:h-[200px]" />
        </div>

        <div className="flex-col gap-4 md:gap-6 md:col-span-1 lg:col-span-1 hidden md:flex">
          <ComingSoonCard className="h-[250px] sm:h-[300px]" />
          <ComingSoonCard className="h-[230px] sm:h-[250px]" />
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  className?: string;
  href?: string;
}

function ProjectCard({
  title,
  description,
  image,
  className = "",
  href,
}: ProjectCardProps) {
  const CardWrapper = href ? 'a' : 'div';
  
  return (
    <CardWrapper
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-white/30 p-4 sm:p-6 md:p-10 relative overflow-hidden rounded-lg shadow-md roboto border border-white/20 transition-all duration-300 hover:shadow-lg will-change-transform hover:-translate-y-1 ${className} ${href ? 'cursor-pointer' : ''}`}
    >
      <div className="flex flex-col gap-2 relative z-10">
        <h2 className="text-[#0083C4] text-lg sm:text-xl md:text-2xl font-bold">
          {title}
        </h2>
        <p className="text-xs sm:text-sm md:text-base">{description}</p>
      </div>
      <div className="absolute bottom-[-30px] px-3 sm:px-5 left-0 w-full flex justify-center">
        <img className="h-[200px] md:h-full sm:w-48 md:w-full mt-4" src={image} alt={title} />
      </div>
      <div className="absolute inset-0 backdrop-blur-sm -z-10" />
    </CardWrapper>
  );
}

function ComingSoonCard({ className = "" }: { className?: string }) {
  return (
    <div
      className={`bg-white/30 backdrop-blur-sm p-4 sm:p-6 md:p-10 relative overflow-hidden rounded-lg shadow-md roboto border border-white/20 transition-transform hover:scale-[1.02] group ${className}`}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="w-full max-w-[240px] sm:max-w-[280px] space-y-3 sm:space-y-4">
          <div className="h-6 sm:h-8 bg-[#0083C4]/10 rounded-md animate-pulse" />

          <div className="space-y-2">
            <div
              className="h-3 sm:h-4 bg-[#0083C4]/10 rounded-md w-3/4 animate-pulse"
              style={{ animationDelay: "0.1s" }}
            />
            <div
              className="h-3 sm:h-4 bg-[#0083C4]/10 rounded-md w-1/2 animate-pulse"
              style={{ animationDelay: "0.2s" }}
            />
          </div>

          <div className="flex gap-2 pt-4">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-[#0083C4]/10 animate-pulse"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 mt-4 sm:mt-6 text-[#0083C4]/70">
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#0083C4] animate-ping" />
            <span className="text-xs sm:text-sm font-medium">Coming Soon</span>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 grid grid-cols-8 gap-0.5 sm:gap-1">
          {[...Array(64)].map((_, i) => (
            <div
              key={i}
              className="aspect-square bg-[#0083C4] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity"
              style={{
                transitionDelay: `${Math.random() * 500}ms`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
