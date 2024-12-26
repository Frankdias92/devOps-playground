variable "s3_bucket_name" {
  type = string
  description = "bucket name"
}

variable "s3_tags" {
  type = map(string) 
  default = {}
  description = "Tags created"
}