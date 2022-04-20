import ComponentHeader from "./components/component_header";
import ComponentBody from "./components/component_body";
import ComponentFooter from "./components/component_footer";
import ComponentLeftBar from "./components/component_leftBar";

function App() {
  return (
    <div className="flex container mx-auto bg-gray-100 rounded-t-lg p-5">
      <div className="w-32 ml-5">
        <ComponentLeftBar />
      </div>
      <div className="w-full">
        <ComponentHeader />
        <ComponentBody />
        <ComponentFooter />
      </div>
    </div>
  );
}

export default App;