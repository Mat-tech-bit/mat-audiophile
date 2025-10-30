"use client"

import React, { useState } from "react"
import Link from "next/link"
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Button,
  useMediaQuery,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import { useTheme } from "@mui/material/styles"
import { ThemeToggleButton } from "../theme/page"
import { AddShoppingCart } from "@mui/icons-material"


export default function Navbar() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const [open, setOpen] = useState(false)

  const handleDrawerToggle = () => setOpen(!open)

  const navLinks = [
   {label: "HOME", href: "/home"},
    {label: "HEADPHONES", href: "/headphones"},
    {label: "SPEAKERS", href: "/speakers"},
    {label: "EARPHONES", href: "/earphones"},
  ]

  return (
    <AppBar position="sticky" sx={{bgcolor: "black", borderBottom: "1px solid white", pl: "40px", pr: "40px"}}>
      <Toolbar>
        {isMobile ? (
          <>
            {/* Mobile Drawer Button */}
            <IconButton color="inherit" edge="start" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
          audiophile
        </Typography>
            {/* <ThemeToggleButton/> */}

            {/* Drawer Menu */}
            <Drawer anchor="left" open={open} onClose={handleDrawerToggle}>
              <Box  sx={{ width: 250 }} onClick={handleDrawerToggle}>
                <List >
                  {navLinks.map((link) => (
                    <ListItem key={link.href}>
                      <Link href={link.href} style={{ textDecoration: "none", color: "inherit" }}>
                        <ListItemText primary={link.label} />
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer> 
          </>
        ) : (
          <Box sx={{display: "flex", flexGrow: 1}}>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
          audiophile
        </Typography>
            {navLinks.map((link) => (
              <Button
                key={link.href}
                component={Link}
                href={link.href}
                color="inherit"
              >
                {link.label}
              </Button>
            ))}
          </Box>
        )}
        <Link href={"/cart"}>
        <Button sx={{color: "white"}} >
      <AddShoppingCart/>
      </Button>
      </Link>
        <ThemeToggleButton/>
      </Toolbar>
    </AppBar>
  )
}
