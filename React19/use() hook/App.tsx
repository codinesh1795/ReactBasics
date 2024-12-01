// React 19 - includes its own compiler which will speed up performance and automate certain
// tedious tasks, reducing workload for developers

// With R19 new compiler there is no longer need for memorization and memoization for the
// process of optimizing components to prevent unnecessary re renders. Previously we relied on
// hooks like useMemo() and useCallback() for this purpose, but now these will become obsolete.

// We no loner need to install 3p packages for SEO and metadata as with react-19 we have builtin
// support for these features. We can place tags anywhere within the component and it will
// work for both client and server

// Built in support for useClient and useServer directives. This allows components to be rerender
// on server improving SEO, faster page load times and mre straightforward data fetching

// Totally obsolete things going forward - forwardRef , React.lazy loading, useContext, memo, useEffect and useCallback
//import FetchTodoWithoutUse from "./components/FetchTodoWithoutUse.tsx";
import FetchTodoWithUse from "./components/FetchTodoWithUse.tsx";
import { Suspense } from "react";

const App = () => {
  return (
      <Suspense fallback={<h2>Loading...</h2>}>
        <FetchTodoWithUse />
      </Suspense>
  )
}

export default App
