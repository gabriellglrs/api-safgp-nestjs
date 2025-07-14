-- CreateTable
CREATE TABLE `Empresa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `ticker` VARCHAR(191) NOT NULL,
    `setor` VARCHAR(191) NOT NULL,
    `cotacaoAtual` DOUBLE NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Empresa_ticker_key`(`ticker`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Valuation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pl` DOUBLE NOT NULL,
    `pvp` DOUBLE NOT NULL,
    `dlpl` DOUBLE NOT NULL,
    `dlEbitda` DOUBLE NOT NULL,
    `evEbitda` DOUBLE NOT NULL,
    `empresaId` INTEGER NOT NULL,

    UNIQUE INDEX `Valuation_empresaId_key`(`empresaId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Rentabilidade` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `roe` DOUBLE NOT NULL,
    `margemLiquida` DOUBLE NOT NULL,
    `dyAtual` DOUBLE NOT NULL,
    `dy5Anos` DOUBLE NOT NULL,
    `empresaId` INTEGER NOT NULL,

    UNIQUE INDEX `Rentabilidade_empresaId_key`(`empresaId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Crescimento` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cagrReceitaAtual` DOUBLE NOT NULL,
    `cagrReceita3Anos` DOUBLE NOT NULL,
    `cagrReceita6Anos` DOUBLE NOT NULL,
    `cagrLucroAtual` DOUBLE NOT NULL,
    `cagrLucro3Anos` DOUBLE NOT NULL,
    `cagrLucro6Anos` DOUBLE NOT NULL,
    `empresaId` INTEGER NOT NULL,

    UNIQUE INDEX `Crescimento_empresaId_key`(`empresaId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PrecoTeto` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `precoTetoBazin` DOUBLE NOT NULL,
    `margemSegurancaBazin` DOUBLE NOT NULL,
    `precoTetoGraham` DOUBLE NOT NULL,
    `margemSegurancaGraham` DOUBLE NOT NULL,
    `empresaId` INTEGER NOT NULL,

    UNIQUE INDEX `PrecoTeto_empresaId_key`(`empresaId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Analise` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dataAnalise` DATETIME(3) NOT NULL,
    `recomendacao` VARCHAR(191) NOT NULL,
    `justificativa` VARCHAR(191) NOT NULL,
    `pontuacao` DOUBLE NOT NULL,
    `empresaId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HistoricoPrecos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `data` DATETIME(3) NOT NULL,
    `preco` DOUBLE NOT NULL,
    `volume` DOUBLE NOT NULL,
    `empresaId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Portfolio` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `dataCriacao` DATETIME(3) NOT NULL,
    `valorTotal` DOUBLE NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PortfolioEmpresa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `portfolioId` INTEGER NOT NULL,
    `empresaId` INTEGER NOT NULL,

    UNIQUE INDEX `PortfolioEmpresa_portfolioId_empresaId_key`(`portfolioId`, `empresaId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Valuation` ADD CONSTRAINT `Valuation_empresaId_fkey` FOREIGN KEY (`empresaId`) REFERENCES `Empresa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Rentabilidade` ADD CONSTRAINT `Rentabilidade_empresaId_fkey` FOREIGN KEY (`empresaId`) REFERENCES `Empresa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Crescimento` ADD CONSTRAINT `Crescimento_empresaId_fkey` FOREIGN KEY (`empresaId`) REFERENCES `Empresa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PrecoTeto` ADD CONSTRAINT `PrecoTeto_empresaId_fkey` FOREIGN KEY (`empresaId`) REFERENCES `Empresa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Analise` ADD CONSTRAINT `Analise_empresaId_fkey` FOREIGN KEY (`empresaId`) REFERENCES `Empresa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HistoricoPrecos` ADD CONSTRAINT `HistoricoPrecos_empresaId_fkey` FOREIGN KEY (`empresaId`) REFERENCES `Empresa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PortfolioEmpresa` ADD CONSTRAINT `PortfolioEmpresa_portfolioId_fkey` FOREIGN KEY (`portfolioId`) REFERENCES `Portfolio`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PortfolioEmpresa` ADD CONSTRAINT `PortfolioEmpresa_empresaId_fkey` FOREIGN KEY (`empresaId`) REFERENCES `Empresa`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
