import { mainProduct } from "../Data/Banners";

function HandleUpVote(props) {
  console.log(props.title);
  return (
    <div
      onClick=
      {() => {
        alert("you clicked on the pictures");
      }}
      />
  );
}

export default HandleUpVote;
