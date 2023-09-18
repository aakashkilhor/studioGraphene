import { Box } from "@mui/material";
import styles from "./styles";

const HeroSection = () => {
  const navbar = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    {
      name: "Our Products",
      id: "product",
      child: [
        { name: "Product 1", id: "p1" },
        { name: "Product 2", id: "p2" },
        { name: "Product 3", id: "p3" },
        { name: "Product 4", id: "p4" },
      ],
    },
    { name: "Contact Us", id: "contact" },
  ];

  return (
      <Box sx={styles.container}>
        <Box sx={styles.title}>
          <Box sx={styles.titleName}>ShopKart</Box>
          <Box sx={styles.titleRight}>
            <Box>WISHLIST(0)</Box>
            <Box>BAG(0)</Box>
            <Box component="img"></Box>
          </Box>
        </Box>
        <Box sx={styles.divider}>
          <Box sx={styles.star} component="img" src="/assets/star.svg" alt="" />
        </Box>
        <Box sx={styles.navbar}>
          {navbar.map((item) => (
            <Box key={item.id} sx={item.child ? styles.subMenu : styles.menu}>
              <Box sx={item.child ? styles.menuItemList : styles.menuItem}>
                {item.name}
              </Box>
              {item.child && (
                <Box sx={styles.childList}>
                  {item.child.map((subItem) => (
                    <Box key={subItem.id} sx={styles.subMenuItem}>
                      {subItem.name}
                    </Box>
                  ))}
                </Box>
              )}
            </Box>
          ))}
        </Box>
        <Box sx={styles.tagContainer}>
            <Box sx={styles.tagLine}>Fresh</Box>
            <Box sx={styles.tagOutLine}>2022</Box>
            <Box sx={styles.tagBottomLine}>Look</Box>
            <Box sx={styles.orangeContainer}>

            <Box sx={styles.orange}></Box>
            <Box sx={styles.orangeBg}></Box>
            <Box sx={styles.boy} component="img" src="/assets/lgBoy.png"></Box>
            <Box sx={styles.smBoy} component="img" src="/assets/xsBoy.png"></Box>
            </Box>
        </Box>
        <Box sx={styles.dividerStar}>
          <Box sx={styles.starBottom} component="img" src="/assets/starBig.svg" alt="" />
        </Box>
        <Box sx={styles.seeMore}>See More <Box component="span"><Box component="img" src="/assets/seeArrow.svg" /></Box></Box>
      </Box>
  );
};

export default HeroSection;
