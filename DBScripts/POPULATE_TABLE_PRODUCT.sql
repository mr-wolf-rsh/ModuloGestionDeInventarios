USE [db_inventory]
GO
DELETE FROM [dbo].[t_product]
GO
SET IDENTITY_INSERT [dbo].[t_product] ON 

INSERT [dbo].[t_product] ([id], [code], [name], [description], [stock]) VALUES (1, N'ART0000001', N'Computadora', N'Electro y Tecnología', 20)
INSERT [dbo].[t_product] ([id], [code], [name], [description], [stock]) VALUES (2, N'ART0000002', N'Microondas', N'Electrodoméstico', 17)
INSERT [dbo].[t_product] ([id], [code], [name], [description], [stock]) VALUES (3, N'ART0000003', N'Reloj', N'Accesorios', 4)
INSERT [dbo].[t_product] ([id], [code], [name], [description], [stock]) VALUES (4, N'ART0000004', N'Bolsa de detergente', N'Limpieza', 61)
INSERT [dbo].[t_product] ([id], [code], [name], [description], [stock]) VALUES (5, N'ART0000005', N'Colchón', N'Dormitorio', 24)
INSERT [dbo].[t_product] ([id], [code], [name], [description], [stock]) VALUES (6, N'ART0000006', N'Pan francés', N'Panadería y Pastelería', 123)
INSERT [dbo].[t_product] ([id], [code], [name], [description], [stock]) VALUES (7, N'ART0000007', N'Bolsa de arroz', N'Abarrotes', 97)
INSERT [dbo].[t_product] ([id], [code], [name], [description], [stock]) VALUES (8, N'ART0000008', N'Shampoo', N'Cuidado Personal y Belleza', 89)
INSERT [dbo].[t_product] ([id], [code], [name], [description], [stock]) VALUES (9, N'ART0000009', N'Bolsa de lentejas', N'Menestras y legumbres', 203)
INSERT [dbo].[t_product] ([id], [code], [name], [description], [stock]) VALUES (10, N'ART0000010', N'Bolsa de harina', N'Abarrotes', 126)

SET IDENTITY_INSERT [dbo].[t_product] OFF
