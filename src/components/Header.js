import { AppBar, Divider, Stack, Toolbar, Typography } from "@mui/material";

const Header =() => {
    return (
        <>
        <AppBar
            sx={{
                width: "100vw",
                overflow: "visible",
                transition: "left 500ms",
                py: 0,
                boxShadow: "rgba(100,100,100,0.1) 0px 16px 20px",
                backgroundColor: "background.paper"
            }}>
            <Toolbar
                disableGutters
                sx={{
                    height: "68px !important",
                    minHeight:"68px !important",
                    maxHeight: "68px !important",
                    overflow: "hidden",
                    left: 0,
                    alignItems: "center",
                    backgroundColor: "background.paper",
                }}>
                <Stack direction="row" flex={1} height="30px" minHeight="30px" px={1}>
                    <Stack direction="row" alignItems="center" justifyContent="space-between" color="black" flex={1} spacing={2} mx={1}>
                    {/* <DdosIcon width={70} height={70} /> */}
                    <Typography variant="subtitle1" sx={{ pl: 3, fontFamily: "Nunito" }}>
                        Welcome, <Typography max={15}>parth</Typography>
                    </Typography>

                    <Stack direction="row" alignItems="center" gap={2} divider={<Divider flexItem orientation="vertical" sx={{ borderColor: "grey.600" }} />}>
                        {/* <CreatePopover /> */}

                        <Stack direction="row" alignItems="center" gap={2}>
                    
                        </Stack>
                    </Stack>
                    </Stack>
                </Stack>
        </Toolbar>

        </AppBar>
        </>
    )
}
export default Header;