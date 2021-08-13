import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<h1 style={{ color: "white",
				textAlign: "center",
				marginTop: "-50px" }}>
	
	</h1>
	<Container >
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink href="/aboutus">About us</FooterLink>
			<FooterLink href="/contactus">Contact Us</FooterLink>
			<FooterLink href="#">Stores</FooterLink>
			<FooterLink href="#">Sustainability</FooterLink>
			
		</Column>
		<Column>
			<Heading>Customer Service</Heading>
			<FooterLink href="#">Delivery</FooterLink>
			<FooterLink href="#">Payments</FooterLink>
			<FooterLink href="#">Returns</FooterLink>
		
		</Column>
		<Column>
			<Heading>News</Heading>
			
			<FooterLink href="#" inputMode >Sign up to our newsletter</FooterLink>
			
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "20" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="https://www.instagram.com/online_store_violet/">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "20" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "20" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "20" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;

