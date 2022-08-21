import "./App.css";
import AppBarMenu from "./components/appbar";
import BottomBar from "./components/bottombar";
import MainPageAlter from "./components/mainpagealter";
import MainPageContent from "./components/mainpagecontent";

export default function App() {
  const contentData = {
    hostel1: {
      image:
        "https://images.unsplash.com/photo-1623625434462-e5e42318ae49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      title: "Zoom Bingo",
    },
    hostel2: {
      image:
        "https://images.unsplash.com/photo-1611048267707-aef79593a3ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
      title: "Zoom Royal Enclave",
    },
    hostel3: {
      image:
        "https://images.unsplash.com/photo-1603072387865-e48a022fc541?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Zoom Thrones",
    },
    hostel4: {
      image:
        "https://images.unsplash.com/photo-1615218582669-27bfc28542f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Zoom Vibe",
    },
    hostel5: {
      image:
        "https://images.unsplash.com/photo-1620332372374-f108c53d2e03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
      title: "Zoom Belford",
    },
    hostel6: {
      image:
        "https://images.unsplash.com/flagged/photo-1556438758-8d49568ce18e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
      title: "Zoom Classic",
    },
  };

  return (
    <div className="App">
      <AppBarMenu />
      <MainPageContent
        image={contentData.hostel1.image}
        title={contentData.hostel1.title}
      />
      <MainPageAlter
        image={contentData.hostel2.image}
        title={contentData.hostel2.title}
      />
      <MainPageContent
        image={contentData.hostel3.image}
        title={contentData.hostel3.title}
      />
      <MainPageAlter
        image={contentData.hostel4.image}
        title={contentData.hostel4.title}
      />
      <MainPageContent
        image={contentData.hostel5.image}
        title={contentData.hostel5.title}
      />
      <MainPageAlter
        image={contentData.hostel6.image}
        title={contentData.hostel6.title}
      />
      <BottomBar />
    </div>
  );
}
