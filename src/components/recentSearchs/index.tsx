import RecentSearch from "../ui/recentSearch";
export interface RecentSearchsProps {
  headline: string;
  recentSearchs: Array<string>;
}

export default function RecentSearchs({ headline, recentSearchs }: RecentSearchsProps) {
  return (
    <div className="recentSearchs">
      <h3 className="recentSearchs_headline">{headline}</h3>
      {recentSearchs.map((recentSearch, i) => {
        return <RecentSearch key={i} text={recentSearch} />;
      })}
    </div>
  );
}
