import Photo from "./(picture)/navbar/page";

function Home() {
  return (
    <main className="flex justify-center relative top-64">
      <div className="id_card">
        <div className="photo">
          <Photo />
        </div>

        <ul>
          <li id="li">
            Name: <li id="li2">Muhammad Ahmad</li>
          </li>
          <li id="li">
            Roll No: <li id="li2">00415333</li>
          </li>
          <li id="li">
            Distance learning: <li id="li2">No</li>
          </li>
          <li id="li">
            City: <li id="li2">Karachi</li>
          </li>
          <li id="li">
            Center: <li id="li2">Governor House Karachi</li>
          </li>
          <li id="li">
            Campus: <li id="li2">Main</li>
          </li>
          <li id="li">
            Days/Time: <li id="li2">Friday-09:00 Am - 12:00 pm</li>
          </li>
          <li id="li">Bactch 1</li>
          <br />
          <p className="p">Q2</p>
          <div className="sig">
            <h4>Authorized Signature</h4>
          </div>
        </ul>
      </div>
    </main>
  );
}

export default Home;
