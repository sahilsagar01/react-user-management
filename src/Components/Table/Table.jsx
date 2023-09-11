import { Card, Typography } from "@material-tailwind/react";
import "./Table.css";
import { Button } from "@mui/material";
import UserCard from "../UserCard/UserCard";
import { useEffect, useState } from "react";
import NewUser from "../NewUser/NewUser";
import Skeleton from "@mui/material/Skeleton";

const TABLE_HEAD = ["Sl", "Name", "Email", "Phone no.", "", "Action"];

function Table({ allUsers, onDelete, setNewUser, setAlertPrompt}) {
  const [showModal, setShowModal] = useState(false);
  const [showSkeleton, setShowSkeleton] = useState(false);
  const [showInputForm, setShowInputForm] = useState(false);
  const [userId, setUserId] = useState(0);

console.log("line 17",allUsers)
  const handleCreateUser = () => {
    setShowInputForm(true);
  };

  const handleClick = (i) => {
    setShowModal(true);
    setUserId(i);
    console.log(userId);
  };

  useEffect(() => {
    if(allUsers.length === 0) {
      setShowSkeleton(true)
    }else{
      setTimeout(() => setShowSkeleton(false),3000)
    }
  },[allUsers])

  return (
    <>
    {
      showSkeleton ? 
      <div className="userList">
      <div className="createButton flex flex-col gap-4 mt-8 mx-16 pr-3">
      <div className=" flex justify-between mt-8 mx-16 pr-3">
      <Skeleton variant="rectangular" width={"15%"} height={40} />
      <Skeleton variant="rectangular" width={"20%"} height={40} />
      </div>
        <Skeleton variant="rectangular" width={"100%"} height={40} />
        <Skeleton variant="rectangular" width={"100%"} height={60} />
        <Skeleton variant="rectangular" width={"100%"} height={60} />
        <Skeleton variant="rectangular" width={"100%"} height={60} />
        <Skeleton variant="rectangular" width={"100%"} height={60} />
        <Skeleton variant="rectangular" width={"100%"} height={60} />
        <Skeleton variant="rectangular" width={"100%"} height={60} />
        <Skeleton variant="rectangular" width={"100%"} height={60} />
        <Skeleton variant="rectangular" width={"100%"} height={60} />
        <Skeleton variant="rectangular" width={"100%"} height={60} />
        <Skeleton variant="rectangular" width={"100%"} height={60} />
      </div>
    </div>
      :
      <div className="userList">
      <div className="createButton flex justify-between mt-8 mx-16 pr-3">
        <h1 className=" text-2xl text-gray-500 font-bold">Users</h1>
        <Button onClick={handleCreateUser} variant="outlined" size="small">
          Create user
        </Button>
      </div>
      <Card className=" card w-full overflow-y-auto my-4">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          {showInputForm ? (
            <NewUser
              closeing={() => setShowInputForm(false)}
              setAlertPrompt={setAlertPrompt}
              setNewUser={setNewUser}
            />
          ) : (
            ""
          )}
          {showModal && (
            <UserCard
              closeing={() => setShowModal(false)}
              setAlertPrompt={setAlertPrompt}
              cardInfo={allUsers[userId]}
            />
          )}
          <tbody>
            {allUsers.map((user, index) => (
              <tr
                key={user.name}
                id={index}
                className="even:bg-blue-gray-50/50 bg-white hover:bg-gray-200 ml-10"
              >
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {index + 1}.
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {user.name}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {user.email}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {user.phone}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium tableEdit"
                    onClick={() => handleClick(index)}
                  >
                    Edit
                  </Typography>
                </td>
                <td className="p-4">
                  <Button
                    onClick={() => onDelete(index)}
                    variant="contained"
                    size="small"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
    }
    </>
  );
}
export default Table;
