import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import "./Brand.css";
const ListHeader = ({ children }) => {
  return (
    <Text color={"#878787"} fontWeight={"500"} mb={2} fontSize={"12px"}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      className="bg"
      margin={0}
      bg={"#"}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container fontSize={"12px"} lineHeight={"24px"} maxW={"6xl"} p={10}>
        <SimpleGrid
          color={"#ffffff"}
          columns={{ base: 2, sm: 2, md: 6 }}
          spacing={8}
        >
          <Stack align={"flex-start"}>
            <ListHeader>ABOUT</ListHeader>
            <Link href="/">Contact Us</Link>
            <Link href={"#"}>About Us</Link>
            <Link href={"#"}>Careers</Link>
            <Link href={"#"}>Flipkart Stories</Link>
            <Link href={"#"}>Press</Link>
            <Link href={"#"}>Flipkart Wholesale</Link>
            <Link href="/">Corporate information</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Help</ListHeader>
            <Link href={"#"}>Payment</Link>
            <Link href={"#"}>Shipping</Link>
            <Link href={"#"}>Cancellatrion & Returns</Link>
            <Link href={"#"}>FQA</Link>
            <Link href={"#"}>Report Infringement</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Policy</ListHeader>
            <Link href={"#"}>Return Policy</Link>
            <Link href={"#"}>Tern Of Use</Link>
            <Link href={"#"}>Security</Link>
            <Link href={"#"}>Privacy</Link>
            <Link href={"#"}>EPR Compliance</Link>
          </Stack>

          <Stack borderRight={"2px solid #878787 "} align={"flex-start"}>
            <ListHeader>SOCIAL</ListHeader>
            <Link href={"#"}>Facebook</Link>
            <Link href={"#"}>Twitter</Link>
            <Link href={"#"}>YouTube</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Mail Us:</ListHeader>
            <Text>
              Flipkart Internet Private Limited, Buildings Alyssa, Begonia &
              Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli
              Village, Bengaluru, 560103, Karnataka, India
            </Text>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Registered Office Address:</ListHeader>
            <Text>
              Flipkart Internet Private Limited, Buildings Alyssa, Begonia &
              Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli
              Village, Bengaluru, 560103, Karnataka, India CIN :
              U51109KA2012PTC066107 Telephone: 044-45614700
            </Text>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

// <Box
//   borderTopWidth={1}
//   borderStyle={"solid"}
//   borderColor={useColorModeValue("gray.200", "gray.700")}
// >
//   <Container
//     as={Stack}
//     maxW={"6xl"}
//     py={4}
//     direction={{ base: "column", md: "row" }}
//     spacing={4}
//     justify={{ md: "space-between" }}
//     align={{ md: "center" }}
//   >
//     <Text>© 2022 Chakra Templates. All rights reserved</Text>
//     <Stack direction={"row"} spacing={6}>
//       <SocialButton label={"Twitter"} href={"#"}>
//         <FaTwitter />
//       </SocialButton>
//       <SocialButton label={"YouTube"} href={"#"}>
//         <FaYoutube />
//       </SocialButton>
//       <SocialButton label={"Instagram"} href={"#"}>
//         <FaInstagram />
//       </SocialButton>
//     </Stack>
//   </Container>
// </Box>;
