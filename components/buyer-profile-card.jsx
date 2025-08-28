import { Button } from "@/components/ui/button";

export function BuyerProfileCard({ profile, isTop, onExpand, index }) {
  return (
    <div
      id={`profile-card-${profile.id}`}
      className={`profile-card absolute top-0 w-full h-full bg-white dark:bg-slate-900 border dark:border-slate-800 p-6 flex flex-col transition-all duration-500 rounded-2xl shadow-xl ${
        isTop ? "z-10" : "z-0"
      }`}
      style={{
        transform: isTop ? "translateY(0) scale(1)" : `translateX(${60 * index}px) scale(${0.95 - 0.05 * index}) rotate(${index * 5}deg)`,
        opacity: 1,
        filter: isTop ? "blur(0)" : `blur(${1 * index}px)`,
      }}
    >
      <div className="flex-grow">
        <p className="text-sm font-semibold text-blue-600">{profile.industry}</p>
        <h3 className="text-2xl font-bold mt-1">
          {profile.title} #{profile.id}
        </h3>
        <div className="my-4 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
          <p className="text-sm text-slate-500 dark:text-slate-400">Available Capital</p>
          <p className="text-xl font-semibold">{profile.capital}</p>
        </div>
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-4">{profile.bio}</p>
      </div>
      <div className="mt-auto pt-4 border-t dark:border-slate-700">
        <div className="flex justify-around text-center text-sm">
          <div>
            <strong className="block">{profile.experience}</strong>
            <span className="text-slate-500 dark:text-slate-400">Experience</span>
          </div>
          <div>
            <strong className="block">{profile.acquisitions}</strong>
            <span className="text-slate-500 dark:text-slate-400">Prior Deals</span>
          </div>
        </div>
        <Button onClick={onExpand} variant="secondary" className="w-full mt-4">
          View Full Profile
        </Button>
      </div>
    </div>
  );
}
