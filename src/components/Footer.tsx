import { Link, Stack, Typography } from "@mui/material";
import ConstructionIcon from "@mui/icons-material/Construction";

type Props = {};

export default function Footer({}: Props) {
  return (
    <Stack bgcolor="#f1f1f1">
      <Stack spacing={1} padding={2} direction="column" alignItems="center">
        <Stack direction="row" spacing={2}>
          <Typography variant="h6" color="text.secondary">
            <ConstructionIcon />
            Under Construction
          </Typography>
        </Stack>

        <Typography variant="body2">
          Made with ❤️ by
          <Link
            href="https://github.com/juanxjk"
            target="_blank"
            display="inline-block"
            paddingLeft={1}
          >
            Juan Carlos
          </Link>
        </Typography>
      </Stack>
    </Stack>
  );
}
