function hasCollided(lbullet,lwall){

bulletRightEdge = lbullet.x + lbullet.width;
lwall = wall.x;

if(bulletRightEdge >= lwall){

return true;

}

return false;

}