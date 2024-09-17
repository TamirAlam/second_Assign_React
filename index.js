const MyApp = () => {
  return (
    <div className="main">
       <hr className="line"/>
      <h1>Learn Web Developement</h1>
     
      <div className="firstDiv">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugit hic
          consectetur quibusdam ipsam delectus accusantium possimus omnis
          aspernatur. Deserunt!
        </p>
     
      <div className="secondDiv">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
          excepturi nobis facilis saepe vel? Reiciendis, laudantium quaerat?
          Exercitationem, animi, aspernatur rem distinctio veniam sit
          consectetur esse eius incidunt nam, modi amet aliquid asperiores
          corporis enim alias sequi facere voluptatibus{" "}
          <a href="#">the rest of MDN</a> Adipisci est eaque rem nesciunt ipsum
          recusandae beatae dicta iusto.
        </p>
      </div>
      <div className="lastDiv">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          magnam nisi nam dolores. Labore dolores laboriosam tempora inventore
          aut temporibus iste vero ab rerum, omnis error quibusdam illo ipsa
          fugit minus facilis! Sunt ab deleniti quibusdam non? Labore rerum fuga
          nam incidunt, quisquam nemo dolorum voluptatum reiciendis vero et
          commodi voluptates excepturi libero in odio eligendi possimus,
          dolores, eveniet autem. Vitae, eos! Illo hic fuga architecto
          reprehenderit quis et, tempora excepturi rem quam error neque in
          accusamus quo optio enim.
        </p>
      </div>
    </div>
    </div>
  );
};
const rootDiv = document.getElementById("root");
const root = ReactDOM.createRoot(rootDiv);
root.render(<MyApp />);
