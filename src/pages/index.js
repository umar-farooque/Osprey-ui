import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import useApi from "../hooks/useApi";
import listing from "../api/posts";
export default function Home() {
  // const resp = useApi(listing.getPost);
  // console.log(
  //   ">>data>>>",
  //   resp.data,
  //   ">>loading>>",
  //   resp.loading,
  //   ">>>error>>",
  //   resp.error
  // );
  return (
    <div style={{ padding: 10 }}>
      <h1>Home Page</h1>
      {/* <Button onClick={() => resp.request()} disabled={resp.loading}>
        Fetch
      </Button> */}
    </div>
  );
}
