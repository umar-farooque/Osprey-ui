import { Button, CircularProgress } from "@mui/material";

export default function LoadingButton({
  title,
  indicatorSize = 15,
  indicatorColor = "grey",
  variant = "contained",
  loading,
  ...props
}) {
  return (
    <Button {...props} variant={variant}>
      {title}
      {loading && (
        <span
          style={{
            marginLeft: 10,
            // backgroundColor: "red",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress size={indicatorSize} color={indicatorColor} />
        </span>
      )}
    </Button>
  );
}
