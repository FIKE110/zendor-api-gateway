package config

import "flag"

type GatewayFlagOptions struct {
    RoutesConfigPath string
    ConsumersConfigPath string
    Port       int
	AdminPort int
}


var Gf *GatewayFlagOptions 


func ParseGatewayFlags() *GatewayFlagOptions{
	var routeConfig=flag.String("routefile","config/routes.json","path to routes config")
	var consumersConfig=flag.String("consumersfile","config/consumers.json","path to consumers config")
	var port=flag.Int("port",8787,"port to run the server on")
	var adminPort=flag.Int("adminport",8788,"port to run the admin server on")
	flag.Parse()
	Gf = &GatewayFlagOptions{
		RoutesConfigPath: *routeConfig,
		ConsumersConfigPath: *consumersConfig,
		Port:*port,
		AdminPort: *adminPort,
	}
	return Gf
}