import {
  Box,
  Button,
  Flex,
  FusionThemeProvider,
  IconAltusLogo,
  NavBar,
  Tab,
  Tabs,
} from "fusion";
import "./App.css";
import React from "react";

// Module Federation - importing this from application 2
const Banner = React.lazy(
  () =>
    // @ts-ignore
    import("remote/Banner")
);

function App() {
  return (
    <FusionThemeProvider>
      <NavBar
        sx={{
          justifyContent: "space-between",
        }}
      >
        <Flex>
          {/* <IconButton icon={function noRefCheck() {}} /> */}
          <Box
            sx={{
              ml: 2,
            }}
          >
            <IconAltusLogo size="large" />
          </Box>
          <Tabs value={2}>
            <Tab label="Amogus" value={0} />
            <Tab label="Chromatin" value={1} />
            <Tab label="Pachyderma" value={2} />
            <Tab disabled label="Disabled" value={3} />
          </Tabs>
        </Flex>
        <Flex>
          <Button variant="secondary">Button</Button>
          {/* <IconButton
            icon={function noRefCheck() {}}
            mode="dark"
            sx={{
              mx: 1,
            }}
            variant="tertiary"
          />
          <IconButton
            icon={function noRefCheck() {}}
            mode="dark"
            sx={{
              mx: 1,
            }}
            variant="tertiary"
          />
          <IconButton
            icon={function noRefCheck() {}}
            mode="dark"
            sx={{
              mx: 1,
            }}
            variant="tertiary"
          />
          <Avatar
            color="accent-5"
            icon={function noRefCheck() {}}
            sx={{
              ml: 1,
            }}
          /> */}
        </Flex>
      </NavBar>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Banner />
      </React.Suspense>
    </FusionThemeProvider>
  );
}

export default App;
