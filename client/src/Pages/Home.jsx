const user = localStorage.getItem("loggedInUser");

const Home = () => {
  return (
    <>
      <div className=" h-[100vh] w-[100%] flex justify-center items-center">
        <h1 className="text-center text-white text-3xl uppercase">
          Hello {user}
        </h1>
      </div>
    </>
  );
};

export default Home;
