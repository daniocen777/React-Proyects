import NoteScreen from "../notes/NoteScreen";
import Sidebar from "./Sidebar";
/* import Unselected from "./Unselected"; */

const JournalScreen = () => {
  return (
    <div className="journal__main-content">
      <Sidebar />
      <main>
        {/* <Unselected /> */}
        <NoteScreen />
      </main>
    </div>
  );
};

export default JournalScreen;
