import com.github.gradle.node.npm.proxy.ProxySettings
import com.github.gradle.node.yarn.task.YarnTask
import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
	id("org.springframework.boot") version "3.0.6"
	id("io.spring.dependency-management") version "1.1.0"
	id("com.github.node-gradle.node") version "3.5.1"
	kotlin("jvm") version "1.8.20"
	kotlin("plugin.spring") version "1.8.20"
}
group = "com.example"
version = "0.0.1-SNAPSHOT"
java.sourceCompatibility = JavaVersion.VERSION_17
extra["springCloudVersion"] = "2022.0.2"

repositories {
	mavenCentral()
}

dependencyManagement {
	imports {
		mavenBom("org.springframework.cloud:spring-cloud-dependencies:${property("springCloudVersion")}")
	}
}

dependencies {
	implementation("org.springframework.boot:spring-boot-starter-mustache")
	implementation("org.springframework.boot:spring-boot-starter-webflux")
	implementation("org.springframework.cloud:spring-cloud-starter-gateway")
	implementation("org.springframework.cloud:spring-cloud-gateway-webflux")
	implementation("org.jetbrains.kotlinx:kotlinx-coroutines-reactor")
	implementation("org.jetbrains.kotlin:kotlin-reflect")
	implementation("com.fasterxml.jackson.module:jackson-module-kotlin")

	implementation(
		group = "io.netty",
		name = "netty-resolver-dns-native-macos",
		version = "4.1.92.Final",
		classifier = "osx-aarch_64"
	)
	testImplementation("org.springframework.boot:spring-boot-starter-test")
	implementation("org.springframework.boot:spring-boot-starter-actuator")
}

tasks.withType<KotlinCompile> {
	kotlinOptions {
		freeCompilerArgs = listOf("-Xjsr305=strict")
		jvmTarget = "17"
	}
}

tasks.withType<Test> {
	useJUnitPlatform()
}

node {
	nodeProjectDir.set(file("${project.projectDir}/frontend"))
	download.set(true)
	nodeProxySettings.set(ProxySettings.OFF)
}

val frontendInstallTask = tasks.register<YarnTask>("frontendInstallTask") {
	args.set(listOf("install"))
}

val frontendTask = tasks.register<YarnTask>("frontendTask") {
	dependsOn(frontendInstallTask)
	args.set(listOf("build"))
}

tasks.withType<KotlinCompile>{
	dependsOn(frontendTask)
}
