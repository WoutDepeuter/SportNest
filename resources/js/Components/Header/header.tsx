import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';

export default function Header() {
    return (
      <header className="bg-gray-800 p-4">
        <div className="flex items-center">
          <img 
            src="/logo.png" 
            alt="SportNest Logo" 
            className="w-16 h-auto mr-4" 
          />
          <h1 className="text-white font-bold text-xl">
            SportNest
          </h1>
        </div>
      </header>
    );
  }
  

