import { FetchContributionProps } from '@/lib/guthub-contibutions';
import { Suspense, use } from 'react'
import { ContributionGraph } from './contribution-graph';

const DisplayGitHubContributions = ({ githubContributionsPromise }: { githubContributionsPromise: FetchContributionProps }) => {
  const contributionContent = use(githubContributionsPromise);

  return (
    <div className="mt-[120px] overflow-x-auto lg:col-span-full lg:max-w-[90%] lg:mx-auto">
      {'data' in contributionContent ? (
        <Suspense fallback={<div>Contribution graph loading...</div>}>
          <ContributionGraph
            data={contributionContent.data}
            totalContributions={contributionContent.totalContributions}
            isLoading={contributionContent.isLoading}
          />
        </Suspense>
      ) : <p>{contributionContent.error}</p>}
    </div>
  )
}

export default DisplayGitHubContributions;