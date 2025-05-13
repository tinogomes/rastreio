import Layout from './components/Layout';
import SearchForm from './components/SearchForm';
import SearchResult from './components/SearchResult';
import { useShipments } from './hooks/useShipments';

function App() {
  const { searchResults, isLoading, error, searchShipments, clearResults } = useShipments();

  return (
    <Layout>
      <div className="space-y-6">
        <SearchForm onSearch={searchShipments} onClear={clearResults} />
        <SearchResult
          isLoading={isLoading}
          error={error}
          searchResults={searchResults}
        />
      </div>
    </Layout>
  );
}

export default App;