USE [db_inventory]
GO

/****** Object:  Table [dbo].[t_product]    Script Date: 21/06/2019 23:34:56 ******/
DROP TABLE IF EXISTS [dbo].[t_product]
GO

/****** Object:  Table [dbo].[t_product]    Script Date: 21/06/2019 23:34:56 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[t_product](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[code] [varchar](10) NOT NULL,
	[name] [varchar](20) NOT NULL,
	[description] [varchar](50) NOT NULL,
	[stock] [int] NOT NULL,
 CONSTRAINT [PK_t_product] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

