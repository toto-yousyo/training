import { useState } from "react";
import { Home, Mail, Info, AccountTree } from "@mui/icons-material";
import {
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";

const menu = [
  { title: "HOME", href: "home.html", icon: Home },
  { title: "MAIL", href: "contact.html", icon: Mail },
  { title: "Information", href: "company.html", icon: Info },
  { title: "Sitemap", href: "sitemap.html", icon: AccountTree },
];
export default function MaterialDrawer() {
  //ドロワー開閉のためのフラグ
  const [show, setShow] = useState(false);
  //ボタンクリック時に呼び出されるハンドラー
  const handleDraw = () => setShow(!show);

  return (
    <>
      <Button onClick={handleDraw}>ドローワー</Button>
      <Drawer anchor="left" open={show}>
        <Box sx={{ height: "100vh" }} onClick={handleDraw}>
          <List>
            {/* あらかじめ用意した配列をメニューとして展開 */}
            {menu.map((obj) => {
              const Icon = obj.icon;
              return (
                <ListItem key={obj.title}>
                  <ListItemButton href={obj.href}>
                    <ListItemIcon>
                      <Icon />
                    </ListItemIcon>
                    <ListItemText primary={obj.title} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
