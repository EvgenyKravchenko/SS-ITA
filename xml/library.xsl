<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html"/> 
<xsl:template match="/">
	<html>
		<body>
			<h2>Library</h2>
			<table border="1px solid black">
				<tr bgcolor="#999">
					<th align="center">Title</th>
					<th align="center">Author</th>
					<th align="center">Description</th>
					<th align="center">Price</th>
					<th align="center">Available</th> 
				</tr>
				<xsl:for-each select="//book">
					<tr>
						<td>
							<xsl:for-each select="title">
								<span>(</span>	
								<xsl:value-of select="@lang" />
								<span>) </span>
								<xsl:value-of select="." />
								<br />
							</xsl:for-each>
						</td>
						<td width="150px">
							<xsl:for-each select="author">
								<xsl:value-of select="." />
								<br />
							</xsl:for-each>
						</td>
						<td>
							<xsl:value-of select="description" />
						</td>
						<td>
							<xsl:value-of select="store//price" />
						</td>
						<td>
							<xsl:value-of select="store//available" />
						</td>
					</tr>
				</xsl:for-each>
			</table>
		</body>
	</html>
</xsl:template>
</xsl:stylesheet>
