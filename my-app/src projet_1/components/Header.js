import React from 'react'

const Header = ({connect}) => <div className={"header"}>{connect ? "Connecté" : "Déconnecté"}</div>

export default Header