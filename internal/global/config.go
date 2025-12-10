package global

import (
	"sync"
	"zentro/internal/config"
)

var (
	gatewayConfig *config.GatewayConfig
	configMutex   = &sync.RWMutex{}
)

func ReloadConfig(path string) error {
	configMutex.Lock()
	defer configMutex.Unlock()

	cfg, err := config.LoadRoutes(path)
	if err != nil {
		return err
	}
	gatewayConfig = cfg
	return nil
}
