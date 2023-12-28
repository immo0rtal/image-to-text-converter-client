import { ProcessedResults } from "./ProcessedResults";
import { useProcessedResults } from "./useProcessedResults";

export const ProcessedResultsContainer = () => {
  const { results } = useProcessedResults();

  return <ProcessedResults results={results} />;
};
