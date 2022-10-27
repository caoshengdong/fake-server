package main

import (
	"encoding/json"
	"github.com/gofiber/fiber/v2"
	"github.com/matoous/go-nanoid/v2"
	"os"
	"time"
)

type file struct {
	FileName    string `json:"file_name"`
	Link        string `json:"link"`
	Id          string `json:"id"`
	Creator     string `json:"creator"`
	Status      string `json:"status"`
	CreateTime  string `json:"create_time"`
	Description string `json:"description"`
}

func main() {
	config := fiber.Static{
		Compress:      true,
		ByteRange:     true,
		Browse:        true,
		Index:         "index.html",
		CacheDuration: 60 * time.Second,
		MaxAge:        3600,
		Next:          nil,
	}

	app := fiber.New()
	app.Static("/", "./assets/dist", config)
	api := app.Group("/api")
	api.Get("/analysis/list", func(c *fiber.Ctx) error {
		var l []file
		datetime := time.Now().Format("2006-01-02 15:04:05")
		for i := 0; i < 10; i++ {
			id, err := gonanoid.New(12)
			if err != nil {
				panic(err)
			}
			l = append(l, file{FileName: id + ".pdf", Id: id, Link: "http://www.baidu.com", Creator: "dingzhaocheng", Status: "处理中", CreateTime: datetime, Description: "--"})
		}

		list2json, err := json.Marshal(l)
		if err != nil {
			panic(err)
		}

		return c.SendString(string(list2json))
	})
	api.Get("/analysis/list/:id", func(c *fiber.Ctx) error {
		const FILE_PATH = "./assets/consts/info.json"
		content, err := os.ReadFile(FILE_PATH)
		if err != nil {
			panic(err)
		}
		data := map[string]interface{}{
			"info": string(content),
			"link": "https://memect-finsense.oss-cn-beijing.aliyuncs.com/test/2022%E5%B9%B405%E6%9C%8812%E6%97%A5/1.pdf?Expires=1689936772&OSSAccessKeyId=LTAI5t8KK2UjVyT1pJ7jup3N&Signature=qjAnwhkiNqiNBYN2A8wgMWIsNRY%3D",
		}
		m := map[string]interface{}{
			"data": data,
		}

		map2json, err := json.Marshal(m)
		if err != nil {
			panic(err)
		}

		return c.SendString(string(map2json))
	})

	app.Static("*", "./assets/dist/index.html")

	app.Listen(":8000")
}
